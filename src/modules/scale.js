let notes = [
    "A",
    "A#,Bb",
    "B",
    "C",
    "C#,Db",
    "D",
    "D#,Eb",
    "E",
    "F",
    "F#,Gb",
    "G",
    "G#,Ab"
];
const SCALES = {
    MAJOR: [0,2,4,5,7,9,11],
    //whole, half, whole, whole, half, whole, whole
    MINOR_NATURAL: [0,2,3,5,7,8,10],
    //1, 2, ♭3, 4, 5, ♭6, 7, 8
    MINOR_HARMONIC: [0,2,3,5,6,8,10],
    //1, 2, ♭3, 4, 5, 6, 7, 8
    MINOR_MELODIC_ASC: [0,2,3,5,7,9,11],
    //1, 2, ♭3, 4, 5, ♭6, ♭7, 8
    MINOR_MELODIC_DESC: [0,2,3,5,7,8,9,10]
}
const MAX_FRETS = 18;
const DEFAULT_SCALE = "G";

function reorderNotesFromRoot(root,notes){
    //find root note in notes
    let idx_root = notes.indexOf(root);
    let prior_notes = notes.slice(0,idx_root);
    let notes_in_order = notes.slice(idx_root, notes.length);
    prior_notes.map((n)=>{
        notes_in_order.push(n);
    });
    return notes_in_order;
}
//consider memo-ising the above function

function isNoteInScale(note, root, pattern){
    if(root===note){
        return true;
    }
    //reorder notes array to start from the root note
    let notes_in_order = reorderNotesFromRoot(root,notes);    
    //go through array in scale pattern to find target and see if it matches
    for(let i=0,max=pattern.length;i<max;i++){
        let scale_idx = pattern[i];
        //console.log(pattern[i]);
        //console.log('scale',notes_in_order[scale_idx]);
        if(notes_in_order[scale_idx]===note) {
            return true;
        }
    }
    return false;
}

function calculateScale(root,pattern,neck){
    let scale = neck.map((notes)=>{
        return notes.map((note)=>{
            return isNoteInScale(note,root,pattern);
        });
    });

    return scale;
}

function setupNeck(notesAtNut = ["G","D","A","E"]){
    //setup neck of violin
    let neck = [notesAtNut]; //initialise at nut
    for(var i=1;i<MAX_FRETS;i++){
        //get the item at each element of the previous point on the scale
        let previous_notes = neck[i-1];
        //get the next notes for the current `fret`
        neck.push( previous_notes.map( (note) => {
            var idx = notes.indexOf(note);
            if(idx===notes.length-1){
                idx = 0;
            } else {
                idx += 1;
            }
            return notes[idx];
        } ));
    }
    return neck;
}

export {
    notes,
    SCALES,
    isNoteInScale,
    calculateScale,
    setupNeck
}