export namespace Webhook {

	export interface Request {
	  object: "page";
	  entry: Array<MessageEntry>;
	}

	export interface MessageEntry {
	  id: string; // page id
	  time: number;
	  messaging: Array<MessagingItem>;
	}

	export interface MessagingItem {
	  sender: Sender;
	  recipient: Recipient;
	  timestamp: number;
	  message?: Message;
	  postback?: Postback;
	  delivery?: DeliveryInfo;
	  read?: ReadInfo;
	  optin?: PluginOptin;
	}

	export interface Sender {
		id: string; // user id
	}

	export interface Recipient {
	  id: string; // page id
	}

	export interface Message {
    mid: string;
    text?: string;
    attachments?: Array<Attachment>;
    quick_reply?: QuickReply;
    is_echo?: boolean;
    app_id?: number;
    metadata?: string;
	}

	export type Attachment = MediaAttachment | LocationAttachment;

	export interface MediaAttachment {
		type: MediaAttachmentType;
		payload: MediaAttachmentPayload;
	}

	export interface LocationAttachment {
	  type: typeof AttachmentType.LOCATION;
	  payload: LocationAttachmentPayload;
	  title: string;
	  url: string;
	}

	export interface MediaAttachmentPayload {
    url: string;
	}

	export interface LocationAttachmentPayload {
    coordinates: Coordinates;
	}

	export interface Coordinates {
    lat: number;
    long: number;
	}

	export interface QuickReply {
	  payload: string;
	}

	export interface QuickReplyPayload {
		data: any,
		id?: string
	}

	export interface Postback {
	  payload: string;
	  referral?: Referral;
	}

	export interface PostbackPayload {
		src: PostbackSource,
		data: any,
		id?: string
	}

	export interface DeliveryInfo {
		mids: Array<string>;
		watermark: number;
		seq: number;
	}

	export interface ReadInfo {
		watermark: number;
		seq: number;
	}

	export interface Referral {
		ref?: string;
		source: ReferralSource;
		type: string;
		ad_id?: string;
	}

	export interface PluginOptin {
		ref: string;
	}

/* ready for TypeScript 2.4
	export enum PostbackSource {
		GET_STARTED_BUTTON = "get-started-button",
		POSTBACK_BUTTON = "postback-button",
		PERSISTENT_MENU = "persistent-menu"
	}
*/

	export namespace PostbackSource {
		export const GET_STARTED_BUTTON = "get-started-button";
		export const POSTBACK_BUTTON = "postback-button";
		export const PERSISTENT_MENU = "persistent-menu";
	}

	export type PostbackSource = typeof PostbackSource.GET_STARTED_BUTTON | typeof PostbackSource.POSTBACK_BUTTON | typeof PostbackSource.PERSISTENT_MENU;

	export namespace AttachmentType {
		export const IMAGE = "image";
		export const AUDIO = "audio";
		export const VIDEO = "video";
		export const FILE = "file";
		export const LOCATION = "location";
		export const FALLBACK = "fallback";
	}

	export type MediaAttachmentType = typeof AttachmentType.IMAGE | typeof AttachmentType.AUDIO | typeof AttachmentType.VIDEO | typeof AttachmentType.FILE;
	export type AttachmentType = MediaAttachmentType | typeof AttachmentType.LOCATION | typeof AttachmentType.FALLBACK;

	export namespace ReferralSource {
		export const SHORTLINK = "SHORTLINK";
		export const ADS = "ADS";
		export const MESSENGER_CODE = "MESSENGER_CODE";
		export const DISCOVER_TAB = "DISCOVER_TAB";
	}

	export type ReferralSource = typeof ReferralSource.SHORTLINK | typeof ReferralSource.ADS | typeof ReferralSource.MESSENGER_CODE | typeof ReferralSource.DISCOVER_TAB;
}