<script setup lang="ts">
type Props = {
  message?: string;
};
const props = withDefaults(defineProps<Props>(), { message: "World" });

const message = ref(props.message);
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello, {{ message }}!</h1>
  <div class="mt-2">
    <input
      v-model="message"
      type="text"
      placeholder="メッセージ"
      aria-label="メッセージ"
      class="border border-gray-500"
    />
  </div>
</template>
