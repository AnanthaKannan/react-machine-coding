# Projects
1. Drag and Drop ✅
2. accordion with transition✅
3. Search box with suggestion dropdown✅
4. File exporter✅
5. Tool tip✅
6. Loader✅
7. start rating
8. calender
9. Infinite scroll


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


## Search box
You have this sequence of events:

1. You type something → suggestions appear.
2. You click on a suggestion (<li> element).
3. But the moment you click, the input loses focus, triggering onBlur.
4. Your onBlur handler runs:
```onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}```
5. which hides the suggestion list (by setting showSuggestions to false).
6. Then, the click event on the <li> never fires, because the element was unmounted (the <ul> disappears before the click can register).
Why onMouseDown={(e) => e.preventDefault()} fixes it

1. onMouseDown fires before onBlur.

2. When you call e.preventDefault() in onMouseDown, it prevents the input from losing focus when you click on the list item — so the onBlur doesn’t fire yet.

✅ Result:

* Input stays focused.
* onClick can fire normally.
* Your handleSelect() runs.
* After that, you manually hide the suggestions.