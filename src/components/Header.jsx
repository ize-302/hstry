import React from 'react';
import AddIcon from '../assets/svg/addIcon';
import BackIcon from '../assets/svg/backIcon';
import { UrlService } from '../storage_service/url_service';

const Header = ({ isHistory, isAdd, switchShowing, baseUrl }) => {
  const service = new UrlService();
  const handleDeleteUrl = async (id) => {
    await service.removeUrl(id);
    switchShowing('urls');
  };
  return (
    <div className="top-nav">
      <h1 onClick={() => switchShowing('urls')}>
        {isHistory || isAdd ? (
          <>
            <BackIcon />
            Back
          </>
        ) : (
          'HSTRY!'
        )}
      </h1>
      {!isHistory && !isAdd ? (
        <button
          onClick={() => switchShowing('add-url')}
          title="Add URL to track"
          id="add-url-button"
        >
          <AddIcon />
          Add URL
        </button>
      ) : null}
      {isHistory && !isAdd ? (
        <button id="delete-button" onClick={() => handleDeleteUrl(baseUrl.id)}>
          Remove URL
        </button>
      ) : null}
    </div>
  );
};

export default Header;
