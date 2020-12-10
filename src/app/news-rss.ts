export interface NewsRss {
  rss: IRssObject;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  "atom:link": Array<string>;
  description: Array<string>;
  item: Array<IRssItem>;
  language: Array<string>;
  lastBuildDate: Date;
  link: Array<string>;
  title: Array<string>;
}

export interface IRssItem {
  category: Array<string>;
  description: Array<string>;
  guid: any;
  link: Array<string>;
  pubDate: Date;
  title: Array<string>;
}
