import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import Layout from '../components/Layout';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {FlexView, StyledText} from '../styles/stheme';
import ProductItem from '../components/product/ProductItem';

const Home = () => {
  const [covers, setCovers] = useState<any>();
  const [products, setProducts] = useState<any>();
  useEffect(() => {
    if (!products) {
      getProducts();
    }

    setCovers([
      {
        cover_title: 'Quick Delivery',
        cover_subtitle: '10월 빠른배송 라인업',
        cover_desc:
          '국내에서 가장 많은 사랑을 받은 제품만을 엄선한\n빠른배송 서비스를 만나보세요',
        cover_d_img_url:
          'https://cdn.closedshops.com/thumb/20211001/9a221488ed6b2df902211489521b85cb.jpg=w800',
        cover_m_img_url:
          'https://cdn.closedshops.com/thumb/20211001/9a221488ed6b2df902211489521b85cb.jpg=w800',
        preorder_ended_check: false,
        sale_check: true,
      },
      {
        cover_title: 'Quick Delivery',
        cover_subtitle: '10월 빠른배송 라인업',
        cover_desc:
          '국내에서 가장 많은 사랑을 받은 제품만을 엄선한\n빠른배송 서비스를 만나보세요',
        cover_d_img_url:
          'https://cdn.closedshops.com/thumb/20211020/3a89841c32ae78617e519aaa3a7fa4a9.jpg=w800',
        cover_m_img_url:
          'https://cdn.closedshops.com/thumb/20211020/3a89841c32ae78617e519aaa3a7fa4a9.jpg=w800',
        preorder_ended_check: false,
        sale_check: true,
      },
    ]);
  }, []);

  const getProducts = async () => {
    try {
      const res: any = await axios.get(
        'https://dev.reddays.kr/products.json?num=8&filter=sale&orderby=prate-desc&no_count=true',
      );
      setProducts(res.data.products);
    } catch (e: any) {
      console.log('error!!');
    }
  };

  return (
    <Layout isFullScreen headerOptions={{isHeader: false}}>
      <ScrollView>
        {covers && covers.length > 0 && (
          <SwiperFlatList
            style={{
              width: 375,
              height: 720,
            }}
            showPagination={false}
            data={covers}
            renderItem={({item}) => (
              <View
                style={{
                  width: 375,
                  height: 720,
                  position: 'relative',
                }}>
                <Image
                  style={{
                    width: 375,
                    height: 720,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: item.cover_m_img_url,
                  }}></Image>
                <FlexView
                  type="col"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    zIndex: 100000,
                    marginBottom: 50,
                  }}>
                  <StyledText
                    font="16"
                    color="white"
                    style={{
                      marginBottom: 10,
                      marginLeft: 10,
                    }}>
                    {item.cover_title}
                  </StyledText>
                  <StyledText
                    font="12"
                    color="white"
                    style={{
                      marginBottom: 20,
                      marginLeft: 10,
                    }}>
                    {item.cover_subtitle}
                  </StyledText>
                  <StyledText
                    font="10"
                    color="white"
                    style={{
                      marginBottom: 10,
                      marginLeft: 10,
                    }}>
                    {item.cover_desc}
                  </StyledText>
                </FlexView>
              </View>
            )}
          />
        )}
        {products && products.length > 0 && (
          <FlexView
            type="rowCenter"
            style={{
              flexWrap: 'wrap',
            }}>
            {products.map((product: any) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </FlexView>
        )}
      </ScrollView>
    </Layout>
  );
};

export default Home;
