import React from 'react';
import AddUrlForm from '../../components/AddUrlForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HistoryList from '../../components/HistoryList';
import UrlList from '../../components/UrlList';
import './Popup.scss';

const Popup = () => {
  const [showing, setshowing] = React.useState('urls');
  const [urlToShow, seturlToShow] = React.useState({});

  const handleShowing = (content) => {
    switch (content) {
      case 'urls':
        setshowing('urls');
        break;
      case 'add-url':
        setshowing('add-url');
        break;
      case 'history':
        setshowing('history');
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Header
        isHistory={showing === 'history'}
        isAdd={showing === 'add-url'}
        switchShowing={(content) => handleShowing(content)}
        baseUrl={urlToShow}
      />
      {showing === 'urls' && (
        <UrlList
          switchShowing={(urlObj) => {
            handleShowing('history');
            seturlToShow(urlObj);
          }}
        />
      )}
      {showing === 'history' && <HistoryList baseUrl={urlToShow.url} />}
      {showing === 'add-url' && (
        <AddUrlForm switchShowing={(content) => handleShowing(content)} />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Popup;
