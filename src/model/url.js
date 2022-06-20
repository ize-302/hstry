export class Url {
  id;
  url;

  constructor(id, url) {
    this.id = id == null ? 0 : id;
    this.url = url == null ? "" : url;
  }
}