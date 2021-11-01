import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import Layout from '../components/Layout';
import {FlexView} from '../styles/stheme';
import ProductItem from '../components/product/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState<any>();
  const [params, setParams] = useState<{
    page: number;
    num: number;
  }>({
    page: 1,
    num: 20,
  });
  const [totalCount, setTotalCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [params.page]);

  const getProducts = async () => {
    try {
      const res: any = await axios.get(
        'https://dev.reddays.kr/products.json?num=24&filter=sale&orderby=prate-desc&page=' +
          params.page,
      );
      setTotalCount(res.total_count);
      setProducts(res.data.products);
      setTotal(total + res.data.products.length);
      setIsLoading(false);
    } catch (e: any) {
      console.log('error!!');
    }
  };

  const handleLoadMore = () => {
    if (totalCount <= total) {
      return;
    }

    if (params.page) {
      setParams({
        ...params,
        page: params.page + 1,
      });
    }
  };

  const handleRefresh = () => {
    setParams({
      ...params,
      page: 1,
    });
    setRefreshing(true);
  };

  return (
    <Layout isFullScreen headerOptions={{isHeader: false}}>
      <ScrollView>
        {products && products.length > 0 && isLoading === false && (
          <FlexView
            type="rowCenter"
            style={{
              flexWrap: 'wrap',
            }}>
            <FlatList
              data={products}
              renderItem={({item}) => <ProductItem product={item} />}
              keyExtractor={(item, index) => String(item.id) + '-' + index}
              numColumns={1}
              onEndReached={handleLoadMore}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />

            {/* {products.map((product: any) => (
              <ProductItem product={product} key={product.id} />
            ))} */}
          </FlexView>
        )}
      </ScrollView>
    </Layout>
  );
};

export default ProductList;
