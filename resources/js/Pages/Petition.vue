<script setup>

const props = defineProps({
    petition: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="flex flex-row-reverse max-w-6xl mx-auto mb-96">
        <div class="grow relative rounded-lg shadow-lg">
            <div class="aspect-[2/1] rounded-t-lg">
                <img class="rounded-t-lg w-full h-full object-cover"
                     :src="petition.img"
                     alt="">
            </div>
            <div>{{ petition.tag }}</div>
        </div>
        <div class="w-96">

        </div>
    </div>
</template>
<script>
export default {
    name: 'Petition'
}
</script>
