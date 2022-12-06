import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type Props = {
  editorState: string
  setEditorState: (e: string) => void
}

const Editor: React.FC<Props> = (props: Props) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      [
        'bold',
        'italic',
        'underline',
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
  }
  return (
    <ReactQuill
      value={props.editorState}
      modules={modules}
      onChange={(e) => props.setEditorState(`${e}`)}
    />
  )
}

export default Editor
