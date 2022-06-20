import React from 'react';
import { UrlService } from '../storage_service/url_service';

const AddUrlForm = ({ switchShowing }) => {
  const service = new UrlService();
  const urlRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = urlRef?.current?.value;
    if (url) {
      try {
        // fetch urls
        const fetchedUrls = await service.getUrls();
        const newUrlExists = fetchedUrls.find((item) => item.url === url);
        if (!newUrlExists) {
          await service.addUrl({ url: url });
          switchShowing('urls');
        } else {
          alert('Url already exists');
        }
      } catch (ex) {
        alert(ex.message);
        console.error(ex);
      }
    }
  };

  return (
    <div className="add-url-form">
      <div>
        <p>Submit a URL whose history you want tracked. e.g github.com</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input ref={urlRef} placeholder="e.g github.com" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUrlForm;
