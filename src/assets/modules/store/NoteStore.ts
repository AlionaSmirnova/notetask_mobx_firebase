import {makeAutoObservable, runInAction, reaction} from 'mobx';

export default class NoteStore {
  noteData: any[] = [];
  noteArray: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setNote(payload: any[]) {
    this.noteArray = payload;
    console.log(payload,'payload');
  };

  addNoteToArray(id:number, title: string, body: string, date: string) {
    let note = this.noteArray;
    note.push({
      id: note.length || 0,
      title: title,
      body: body,
      date: date,
    });

    this.setNote(note);
  
    console.log(this.noteArray.length, 'note array store');
  };

  deleteNote(id: number) {
 this.setNote(this.noteArray.filter(item => item.id !== id));
   
  }

}
