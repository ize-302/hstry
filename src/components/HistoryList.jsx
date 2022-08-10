import React from 'react';
import Empty from './EmptyState';

const HistoryList = ({ baseUrl }) => {
  const [historyItems, sethistoryItems] = React.useState([]);

  chrome.history.search({ text: '', maxResults: 500 }, (history) => {
    const filtered = history.filter((item) => item.url.includes(baseUrl));
    sethistoryItems(filtered);
  });

  return (
    <div>
      <div className="page-title">
        Viewing
        <img
          alt={baseUrl}
          src={
            'https://s2.googleusercontent.com/s2/favicons?domain_url=' + baseUrl
          }
        />
        {baseUrl}
      </div>
      {historyItems.length > 0 ? (
        <div className="urls">
          {historyItems.map((urlObj) => (
            <div
              key={urlObj.id}
              onClick={() => window.open(urlObj.url)}
              className="url-item history-item"
            >
              {urlObj.title}
            </div>
          ))}
        </div>
      ) : (
        <Empty message={'No history to show for ' + baseUrl} />
      )}
    </div>
  );
};

export default HistoryList;
