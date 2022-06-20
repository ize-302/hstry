import {
  BaseService
} from "./base_service";

export class UrlService extends BaseService {

  constructor() {
    super();
    this.tableName = "Urls";
  }

  getUrls() {
    return this.connection.select({
      from: this.tableName,
    })
  }

  addUrl(url) {
    return this.connection.insert({
      into: this.tableName,
      values: [url],
      return: true
    })
  }

  getUrlByUrl(url) {
    return this.connection.select({
      from: this.tableName,
      where: {
        url: url
      }
    })
  }

  removeUrl(id) {
    return this.connection.remove({
      from: this.tableName,
      where: {
        id: id
      }
    })
  }

  // updateUrlByUrl(url, updateData) {
  //   return this.connection.update({
  //     in: this.tableName,
  //     set: updateData,
  //     where: {
  //       url: url
  //     }
  //   })
  // }
}