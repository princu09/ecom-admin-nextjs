import React, { useEffect, useRef } from "react";
export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
  className,
  reg
}) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);
  
  return (
    <div className={`${className} text-black`}>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data)
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}
