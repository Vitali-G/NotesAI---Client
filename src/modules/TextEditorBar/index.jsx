import React from 'react'
import { BiBold, BiItalic, BiUnderline, BiListUl, BiListOl, BiLink, BiAlignLeft, BiAlignRight, BiAlignJustify, BiImageAdd } from "react-icons/bi"
import { BsTextCenter } from "react-icons/bs"

export default function TextEditorBar({handleRichText}) {
  return (
    <div className="text-editor-header">
                    <button onClick={handleRichText} type="button" className="btn" data-element="bold">
                        <BiBold size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="italic">
                        <BiItalic size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="underline">
                        <BiUnderline size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="insertUnorderedList">
                        <BiListUl size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="insertOrderedList">
                        <BiListOl size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="createLink">
                        <BiLink size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="justifyLeft">
                        <BiAlignLeft size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="justifyCenter">
                        <BsTextCenter size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="justifyRight">
                        <BiAlignRight size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="justifyFull">
                        <BiAlignJustify size={20}/>
                    </button>
                    <button onClick={handleRichText} type="button" className="btn" data-element="insertImage">
                        <BiImageAdd size={20}/>
                    </button>
    </div>
  )
}
