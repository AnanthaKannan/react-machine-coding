1. what is the difference between px and rem in CSS?


------------ some type -----------
HTMLDivElement
FC


### Drag drop
```ts
// this should be prevent default, otherwise onDrop will not work
// it will prevent dropping the target element
const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
```

## Getting Mouse Position
```ts
 const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget.getBoundingClientRect();
    const left = btn.left - e.clientX;
    const right = btn.right - e.clientX;
    const top = btn.top - e.clientY;
    const bottom = btn.bottom - e.clientY;
```

## White space - wrap
```white-space: nowrap;``` is a CSS declaration that controls how whitespace and line breaks are handled within an element's text content


## transform: translateX(-50%);