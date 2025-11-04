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


## Typescript + React Tips
* HTMLDivElement
* FC
* DragEvent
* MouseEvent
* ChangeEvent
* useRef<HTMLDivElement>(null)
* useState<string>("")
* useState<number | null>(null)
* useState<boolean>(false)
* useState<Array<string>>([])
* React.FC<Props>
* React.ChangeEvent<HTMLInputElement>
* React.DragEvent<HTMLDivElement>
* React.MouseEvent<HTMLDivElement>
* React.FormEvent<HTMLFormElement>
* React.RefObject<HTMLDivElement>



1. what is the difference between px and rem in CSS?
* 🧱 1. px (Pixels)
  * Definition: A fixed, absolute unit — 1 pixel on the screen.
  * Behavior: Does not scale if the user changes browser font size or zoom level.
* 📏 2. rem (Root EM)
  * Definition: A relative unit — relative to the root (<html>) element’s font-size.
  * Behavior: If the root font size changes, all rem-based sizes scale automatically.
  * example 
  * 
```css 
html {
font-size: 16px; /* default browser font size */
}
p {
font-size: 1.5rem; /* = 1.5 * 16px = 24px */
}
```


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

## Rating Half stat
style={{
          background: 'linear-gradient(to right, gold 50%, lightgray 50%)',
          webkitBackgroundClip: 'text',
          webkitTextFillColor: 'transparent',
        }}

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


## Notes
* transition will not act on "flex-direction" property, because this all are layout properties.
* pure component doing the shallow comparison of props and state to determine whether a re-render is necessary.
* first relative then absolute
* to make an element draggable, set the draggable attribute to true on the HTML element.
* e.currentTarget gives the element to which the event handler is attached, while e.target gives the actual element that triggered the event.
