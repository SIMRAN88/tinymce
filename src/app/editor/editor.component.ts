import { Component, OnInit } from '@angular/core';

// // Import TinyMCE
import 'tinymce/tinymce';

// // A theme is also required
// import 'tinymce/themes/modern/theme';

// // Any plugins you want to use has to be imported
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
declare const tinymce: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    tinymce.init({
      selector: '#editorTextArea',
      plugins: ['advlist autolink lists code link table paste media image imagetools preview'],
      toolbar: 'code bold | italic | underline | bullist | link | table | media | image | preview',
      max_chars: 10000,
      height: 400,
      menubar: true
    });
  }

}
