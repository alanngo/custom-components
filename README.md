# Custom Components

## 🚀 Install

```bash
npm i @alanngo/custom-components
```
or
```bash
yarn add @alanngo/custom-components
```

## 🚀 Components
### Break

Need multiple line breaks without rewriting ``<br/>`` tag?
Use this component to help you in just 1 line

#### Avoid
```html
<br/>
<br/>
<br/>
...
```

#### Prefered
```jsx
<Break number={3}/> 
```
<table>
<th>Props</th>
<th>Type</th>
<th>Description</th>
<tr>
<td>number</td>
<td>Number</td>
<td>How many line breaks to create</td>
</tr>
</table>

### RenderIf
Eliminates the need of ternary operator for conditional rendering
#### Avoid
```jsx
const arr = [1, 2, 3]

{(arr.length>0?
<h1> everything nested will render if arr length is greater than 0 </h1>:
<></>)}
```

#### Prefered
```jsx
const arr = [1, 2, 3]

<RenderIf condition={arr.length > 0}>
<h1> everything nested will render if arr length is greater than 0 </h1>
</RenderIf>
```

<table>
<th>Props</th>
<th>Type</th>
<th>Description</th>
<tr>
<td>condition</td>
<td>Boolean</td>
<td>Condition to render children</td>
</tr>
<tr>
<td>children</td>
<td>JSX</td>
<td>These elemts will render if condition is true</td>
</tr>
<tr>
<td>fallback</td>
<td>JSX</td>
<td>These elemts will render if condition is false</td>
</tr>
</table>

## 🚀 Hooks
coming soon