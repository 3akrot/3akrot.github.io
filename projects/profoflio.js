import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Layout, Menu, Typography, List, Card, Avatar } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { fetchDataStart, fetchDataSuccess, fetchDataError } = portfolioSlice.actions;

const rootReducer = combineReducers({ portfolio: portfolioSlice.reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchPortfolioData = () => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await axios.get('/api/portfolio');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataError(error.message));
  }
};

const Portfolio = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Portfolio</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  actions={[
                    <GithubOutlined key="github" />,
                    <LinkedinOutlined key="linkedin" />,
                  ]}
                >
                  <Card.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.name}
                    description={item.title}
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </Content>
    </Layout>
  );
};

const App = () => (
  <Provider store={store}>
    <Title>Professional Portfolio</Title>
    <Portfolio />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));