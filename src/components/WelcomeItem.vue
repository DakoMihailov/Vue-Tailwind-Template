<template>
  <div class="lg:mt-0 lg:pt-2 lg:pr-0 lg:pb-4 lg:pl-20 mt-8 flex items-center">
    <i class="flex place-items-center place-content-center text-main w-8 h-8 lg:w-12 lg:h-12 lg:rounded-lg lg:border lg:border-solid lg:border-border lg:bg-backgroud lg:-left-6 lg:absolute ">
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 ml-4">
      <h3 class="font-medium text-2xl mb-2 text-white">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>


