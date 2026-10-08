import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && (
        <label className='block mb-1.5 pl-0.5 text-sm font-medium text-slate-600 dark:text-slate-300'>
          {label}
        </label>
      )}

      <div className='w-full rounded-lg border border-slate-200 bg-white overflow-hidden transition-colors duration-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500/20'>
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              initialValue={defaultValue}
              init={{
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                  "image", "advlist", "autolink", "lists", "link",
                  "charmap", "preview", "anchor", "searchreplace",
                  "visualblocks", "code", "fullscreen", "insertdatetime",
                  "media", "table", "help", "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  )
}