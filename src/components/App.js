import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      bookResults:[],
      searchQuery : ''
    };
  },
  onSubmitBookSearch: function(event) {
    event.preventDefault();
    var query = event.target.keyword.value;
    if(!query) {
      alert("검색 단어가 없습니다.")
    }
    $.getJSON("http://apis.daum.net/search/book?callback=?", {
        "q" : query,
        "result" : 10,
        "pageno" : 1,
        "sort" : "popular",
        "output" : "json",
        "apikey" : '341cb95a4fb90b0f20e2a46fa076089a'
    }).then(function(data){
      var item = data.channel.item;
      for (var i = 0; i < item.length; i++) {
        item[i].title = item[i].title.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/(<([^>]+)>)/g,"");
      }
      this.setState({
        searchQuery : query,
        bookResults : (data && data.channel.item) || []
      });
    }.bind(this));
  },
  renderBookSearchResult: function(results) {
    var isResult = results.length > 0;
    var resultList;

    if (isResult) {
      resultList = results.map(function(result) {
        return (
          <li>
            <a href={result.link} target="_blank">
              <div className="thumb"><img src={result.cover_s_url}/></div>
              <div className="text">
                <p className="title">{result.title}</p>
                <p className="desc">지은이: {result.author}</p>
                <p className="info">가격: {result.list_price}, 할인가: {result.sale_price}</p>
              </div>
            </a>
          </li>
        )
      })
    }
    return (
      <div>
        <ul className="list">
          {resultList}
        </ul>
      </div>
    );
  },
  render: function(){
    return (
      <div>
        <h1 className="main-title">Daum 이미지 검색</h1>
    		<div className="exec">
    			<form name="form1" action="/" onSubmit={this.onSubmitBookSearch}>
    				<fieldset>
    					<legend>검색어 입력</legend>
    					<input type="text" name="keyword"/>
    					<input type="submit" value="검색하기" />
    				</fieldset>
    			</form>
    		</div>
        {this.state.searchQuery ? this.renderBookSearchResult(this.state.bookResults) : ''}
      </div>
    );
  }
});

export default App;
