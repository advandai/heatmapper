import Vue from 'vue'

export const fileStore = Vue.observable({
  files: [],
  selectedFile: null,

  addFile (file) {
    this.files.push(file)
    this.selectedFile = file
  }
});
