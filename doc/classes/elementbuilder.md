[@aiteq/messenger-bot](../README.md) > [ElementBuilder](../classes/elementbuilder.md)

# Class: ElementBuilder

Helps to create an Element.

## Hierarchy

[ButtonHoldingBuilder](buttonholdingbuilder.md)

**↳ ElementBuilder**

## Index

### Constructors

* [constructor(title)](elementbuilder.md#constructor)

### Methods

* [addCallButton(title, phoneNumber)](elementbuilder.md#addcallbutton)
* [addExtensionButton(title, extension, [options])](elementbuilder.md#addextensionbutton)
* [addLoginButton(url)](elementbuilder.md#addloginbutton)
* [addLogoutButton()](elementbuilder.md#addlogoutbutton)
* [addPostbackButton(title, id, [data])](elementbuilder.md#addpostbackbutton)
* [addShareButton(builder)](elementbuilder.md#addsharebutton)
* [addUrlButton(title, url, [options])](elementbuilder.md#addurlbutton)
* [setDefaultAction(url, [options])](elementbuilder.md#setdefaultaction)
* [setExtensionDefaultAction(extension, [options])](elementbuilder.md#setextensiondefaultaction)
* [setImageUrl(imageUrl)](elementbuilder.md#setimageurl)
* [setSubtitle(subtitle)](elementbuilder.md#setsubtitle)

---
## Constructors

<a id="constructor"></a>
### `new ElementBuilder(title)`

Creates an instance of ElementBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the Element |

**Returns:** [ElementBuilder](elementbuilder.md)

---

## Methods

<a id="addcallbutton"></a>
### `addCallButton(title, phoneNumber)`

Creates and adds a [Call Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button, max length is 20 characters |
| phoneNumber | `string`   | phone number, format must have `"+"` prefix followed by the country code, area code and local number (e.g. +16505551234) |

**Returns:** `this` - for chaining
___

<a id="addextensionbutton"></a>
###  `addExtensionButton(title, extension, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button) linking a Chat Extension.

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| extension | [ChatExtension](../classes/chatextension.md) | a Chat Extension to be opened when the button is tapped |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="addloginbutton"></a>
###  `addLoginButton(url)`

Creates and adds a [Login Button](https://developers.facebook.com/docs/messenger-platform/account-linking/link-account).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | authentication callback URL (must use HTTPS protocol) |

**Returns:** `this` - for chaining
___

<a id="addlogoutbutton"></a>
###  `addLogoutButton()`

Creates and adds a [Logout Button](https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Returns:** `this` - for chaining
___

<a id="addpostbackbutton"></a>
###  `addPostbackButton(title, id, [data])`

Creates and adds a [Postback Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| id | `string` | an identification of the postback |
| data | `string` | optional data to be send with postback |

**Returns:** `this` - for chaining
___

<a id="addsharebutton"></a>
###  `addShareButton(builder)`

Creates and adds a [Share Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| builder | [GenericTemplateMessageBuilder](../classes/generictemplatemessagebuilder.md) | a generic template message builder |

**Returns:** `this` - for chaining
___

<a id="addurlbutton"></a>
###  `addUrlButton(title, url, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

*Inherited from [ButtonHoldingBuilder](buttonholdingbuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| url | `string` | a URL to be opened in a mobile browser when the button is tapped |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean`   | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="setdefaultaction"></a>
###  `setDefaultAction(url, [options])`

Set a Default Action for the Element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | a URL to be opened |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean`   | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="setextensiondefaultaction"></a>
###  `setExtensionDefaultAction(extension, [options])`

Set a Default Action for the Element linking a Chat Extension.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| extension | [ChatExtension](chatextension.md) | a Chat Extension to be opened |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
(https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="setimageurl"></a>
###  `setImageUrl(imageUrl)`

Sets Element's image.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| imageUrl | `string`   | URL of the image of the Element |

**Returns:** `this` - for chaining
___

<a id="setsubtitle"></a>
###  `setSubtitle(subtitle)`

Sets a text for Element's subtitle.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subtitle | `string`   | subtitle of the Element |

**Returns:** `this` - for chaining
___
