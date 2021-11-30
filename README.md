# Custom Components

## 🚀 Install

```bash
npm i @alanngo/custom-components
```
or
```bash
yarn add @alanngo/custom-components
```
## 🚀 Import Components
```js
import {RenderIf} from "@alanngo/custom-components/dist"
```

## 🚀 Components

### AwesomeText

An easy text component to create individual styled text and apply custom fonts without affecting other elements

#### Avoid
```jsx
<h1 style= {{color: "red"}}> red h1 </h1>
<i><p>blue italic paragraph</p></i>
```

#### Prefered
```jsx
<AwesomeText as="h1" color="red">red h1</AwesomeText>

<AwesomeText as="p" color="blue" italic>blue italic paragraph</AwesomeText>
```

<table>
<th>Props</th>
<th>Type</th>
<th>Description</th>
<th>Default Value</th>
<tr>
<td>as</td>
<td>String</td>
<td>HTML text tags "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"</td>
<td>"p"</td>
</tr>
<tr>
<td>children</td>
<td>JSX</td>
<td>text to render</td>
<td>{JSX Text}</td>
</tr>
<tr>
<td>textColor</td>
<td>String</td>
<td>text color</td>
<td>default html text color</td>
</tr>
<tr>
<td>font</td>
<td>String</td>
<td>font family</td>
<td>default html font</td>
</tr>
<tr>
<td>underline</td>
<td>Boolean</td>
<td>make text underline</td>
<td>false</td>
</tr>
<tr>
<td>overline</td>
<td>Boolean</td>
<td>make text overline</td>
<td>false</td>
</tr>
<tr>
<td>strikethrough</td>
<td>Boolean</td>
<td>make text strikethrough</td>
<td>false</td>
</tr>
<tr>
<td>bold</td>
<td>Boolean</td>
<td>make text bold</td>
<td>false</td>
</tr>
<tr>
<td>italic</td>
<td>Boolean</td>
<td>make text italic</td>
<td>false</td>
</tr>
<tr>
<td>style</td>
<td>Object</td>
<td>user can add custom styling (will override presets)</td>
<td>{ }</td>
</tr>
</table>


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
<th>Default Value</th>
<tr>
<td>number</td>
<td>Number</td>
<td>How many line breaks to create</td>
<td>1</td>

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

<RenderIf condition = {arr.length > 0}>
<h1> everything nested will render if arr length is greater than 0 </h1>
</RenderIf>
```

<table>
<th>Props</th>
<th>Type</th>
<th>Description</th>
<th>Default Value</th>
<tr>
<td>condition</td>
<td>Boolean</td>
<td>Condition to render children</td>
<td>false</td>
</tr>
<tr>
<td>children</td>
<td>JSX</td>
<td>These elements will render if condition is true</td>
<td>{blank jsx fragments}</td>
</tr>
<tr>
<td>fallback</td>
<td>JSX</td>
<td>These elements will render if condition is false</td>
<td>{blank jsx fragments}</td>
</tr>
</table>

## 🚀 Hooks
coming soon