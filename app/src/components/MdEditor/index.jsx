
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { translateMarkdown } from '@/utils'
import { useMemo } from "react";

function MdEditor(props) {
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    }
  }, [])

  return (
    <SimpleMDE
      value={props.value}
      onChange={props.onChange}
      // options={{ autofocus: true, autosave: true, previewRender: translateMarkdown }}
      options={autofocusNoSpellcheckerOptions}
    />
  )
}

export default MdEditor
