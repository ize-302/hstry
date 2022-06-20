import React from 'react';
import Empty from './EmptyState';
import { UrlService } from '../storage_service/url_service';

const UrlList = ({ switchShowing }) => {
  const service = new UrlService();
  const [urls, seturls] = React.useState([]);
  // const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // const urls = [];

  const loadUrlsFromDb = async () => {
    try {
      const fetchUrls = await service.getUrls();
      seturls(fetchUrls);
    } catch (ex) {
      alert(ex.message);
      console.error(ex);
    }
  };

  React.useEffect(() => {
    loadUrlsFromDb();
  }, []);

  return (
    <React.Fragment>
      {urls.length > 0 && <div className="page-title">Tracked URLs</div>}
      {urls.length > 0 ? (
        <div className="urls">
          {urls.map((urlObj, index) => (
            <div
              key={index}
              onClick={() => switchShowing(urlObj)}
              className="url-item"
            >
              {urlObj.url}
            </div>
          ))}
        </div>
      ) : (
        <Empty message="You are currently not tracking any URL" />
      )}
    </React.Fragment>
  );
};

export default UrlList;
