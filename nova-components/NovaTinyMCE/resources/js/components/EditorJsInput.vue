<template>
    <editor
        v-model="text"
        apiKey="jl1i6atzfteid5ebg8b2ozzzltu9pnm41kq7nueaf3hj0ve5"
        :init="{
             skin: false,
             content_css: false,
             height: '500px',
             plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste help wordcount'
             ],
             toolbar:
                'undo redo | link image myCustomToolbarButton | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent',

        }"
        @init="onInit"
    />
</template>
<script>

import 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/media'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/table'
import 'tinymce/plugins/help'
import 'tinymce/plugins/code'
import 'tinymce/plugins/image'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'

import Editor from '@tinymce/tinymce-vue'

export default {
    name: 'EditorJsInput',
    props: {
        placeholder: '',
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    components: {
        Editor
    },
    data: () => ({
        text: '',
        tinymceEditor: {}
    }),
    watch: {
        modelValue: {
            immediate: true,
            handler (v, oldV) {
                this.text = v
            }
        },
        text (v) {
            this.$emit('update:modelValue', v)
        }
    },
    methods: {
        onInit (e, editor) {
            this.tinymceEditor = editor
            console.log(this.tinymceEditor)
        }
    }
}
</script>
