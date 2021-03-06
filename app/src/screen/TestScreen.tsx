import styled, {css} from '@emotion/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import Layout from '../components/Layout';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {etheme} from '../styles/etheme';

const TestScreen = () => {
  const {width} = Dimensions.get('window');
  const [product, setProduct] = useState<any>();
  const [productDescOptions, setProductDescOptions] = useState<{
    pick: boolean;
    sale: boolean;
    quick: boolean;
    logi: boolean;
  }>({
    pick: true,
    sale: false,
    quick: false,
    logi: true,
  });
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res: any = await axios.get(
        'https://dev.reddays.kr/products/show.json?product_id=3016499',
      );
      setProduct(res.data.product);
    } catch (e: any) {
      console.log('error!!');
    }
  };

  const onChangeProductDescOptions = (descType: string, state: boolean) => {
    setProductDescOptions({
      ...productDescOptions,
      [descType]: state,
    });
  };

  return (
    <Layout>
      {product && (
        <ScrollView
          style={css`
            background-color: white;
          `}>
          {product.images && (
            <SwiperFlatList
              style={css`
                width: ${width};
                height: 375px;
              `}
              showPagination={false}
              data={product.images.d}
              renderItem={({item}) => (
                <View
                  style={css`
                    width: ${width};
                    height: 375px;
                  `}>
                  <Image
                    style={{
                      width: width,
                      height: 375,
                      resizeMode: 'contain',
                    }}
                    source={{
                      uri: item,
                    }}
                  />
                </View>
              )}
            />
          )}
          <View
            style={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 35px 20px 0px 20px;
            `}>
            <View
              style={css`
                display: flex;
                flex-direction: column;
              `}>
              <Text
                style={css`
                  font-size: ${etheme.fontSizes.smFontSize};
                  color: black;
                  font-weight: bold;
                `}>
                {product.brand_name}
              </Text>
              <Text
                style={css`
                  font-size: 13px;
                  color: black;
                  margin-top: 6px;
                `}>
                {product.title}
              </Text>
              <Text
                style={css`
                  font-size: 9px;
                  color: rgb(217, 217, 217);
                  font-weight: bold;
                  margin-top: 6px;
                `}>
                {product.apc_pcode}
              </Text>
            </View>
            <View
              style={css`
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: flex-start;
              `}>
              <Text
                style={css`
                  font-size: 9px;
                  color: rgb(106, 106, 106);
                  font-weight: bold;
                  margin-top: 6px;
                `}>
                ???????????????: {product.id}
              </Text>
            </View>
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              margin: 25px 20px 0px 20px;
            `}>
            <Text
              style={css`
                font-size: 18px;
                color: black;
                font-weight: bold;
                margin-right: 5px;
              `}>
              {Math.round((product.price / product.original_price) * 100)}%
            </Text>
            <Text
              style={css`
                font-size: 18px;
                color: rgb(232, 0, 0);
                font-weight: bold;
                margin-right: 5px;
              `}>
              {product.price}
            </Text>
            <Text
              style={css`
                font-size: 11px;
                color: rgb(182, 182, 182);
                font-weight: bold;
                margin-top: 6px;
                text-decoration: line-through;
              `}>
              {product.original_price}
            </Text>
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              margin: 9px 20px 0px 20px;
            `}>
            <Text
              style={css`
                font-size: 9px;
                color: rgb(106, 106, 106);
              `}>
              *??????/?????? ????????? ??? ??????????????? ?????? ????????? ???????????????
            </Text>
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              margin: 35px 20px 0px 20px;
            `}>
            <View
              style={css`
                display: flex;
                flex-direction: row;
                align-items: center;
              `}>
              <View
                style={css`
                  width: 8px;
                  height: 8px;
                  background-color: rgb(248, 184, 10);
                  border-radius: 4px;
                  margin-right: 5px;
                `}
              />
              <View
                style={css`
                  width: 8px;
                  height: 8px;
                  background-color: rgb(248, 184, 10);
                  border-radius: 4px;
                  margin-right: 5px;
                `}
              />
              <View
                style={css`
                  width: 8px;
                  height: 8px;
                  background-color: rgb(217, 217, 217);
                  border-radius: 4px;
                  margin-right: 5px;
                `}
              />
              <View
                style={css`
                  width: 8px;
                  height: 8px;
                  background-color: rgb(217, 217, 217);
                  border-radius: 4px;
                  margin-right: 5px;
                `}
              />
            </View>
            <Text
              style={css`
                font-size: 10px;
                color: rgb(248, 184, 10);
                font-weight: bold;
                margin-right: 5px;
              `}>
              ???????????? ????????????
            </Text>
            <Text
              style={css`
                font-size: 10px;
                color: rgb(182, 182, 182);
                font-weight: bold;
              `}>
              (????????? ?????????: 21??? 10???)
            </Text>
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: row;
              margin: 35px 0px 0px 0px;
            `}>
            <Image
              style={{
                width: width,
                height: 66,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/naverBanner.png')}
            />
          </View>

          <View
            style={css`
              display: flex;
              flex-direction: column;
              margin: 25px 20px 0px 20px;
              border-bottom-width: 1px;
              border-bottom-color: rgb(112, 112, 112);
              border-style: solid;
            `}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('pick', !productDescOptions.pick);
              }}
              style={css`
                margin-bottom: 25px;
              `}>
              <DescTitleText isActive={productDescOptions.pick}>
                ???????????? ????????????
              </DescTitleText>
            </View>
            {productDescOptions.pick && (
              <View
                style={css`
                  padding-bottom: 25px;
                `}>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? ????????? ????????? ???????????????, ????????? ???????????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ????????? PICK! ????????????, ?????? ????????? ???????????? ??? ??????????????????
                  ?????? ??? ????????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? PICK! ????????????, ?????? ????????? ????????? ???????????? ???
                  ?????????????????? ?????? ??? ????????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ?????? ????????? ?????? ???????????? ????????? ??????????????????.
                </Text>
              </View>
            )}
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: column;
              margin: 25px 20px 0px 20px;
              border-bottom-width: 1px;
              border-bottom-color: rgb(112, 112, 112);
              border-style: solid;
            `}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('sale', !productDescOptions.sale);
              }}
              style={css`
                margin-bottom: 25px;
              `}>
              <DescTitleText isActive={productDescOptions.sale}>
                ???????????? ????????????
              </DescTitleText>
            </View>
            {productDescOptions.sale && (
              <View
                style={css`
                  padding-bottom: 25px;
                `}>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? ????????? ????????? ?????? ?????? 7??? ?????? ????????? ???????????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? ????????? ?????? ???????????? ?????? ?????? ??????????????? ?????????
                  ???????????????.
                </Text>
              </View>
            )}
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: column;
              margin: 25px 20px 0px 20px;
              border-bottom-width: 1px;
              border-bottom-color: rgb(112, 112, 112);
              border-style: solid;
            `}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('quick', !productDescOptions.quick);
              }}
              style={css`
                margin-bottom: 25px;
              `}>
              <DescTitleText isActive={productDescOptions.quick}>
                ???????????? ????????????
              </DescTitleText>
            </View>
            {productDescOptions.quick && (
              <View
                style={css`
                  padding-bottom: 25px;
                `}>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? ????????? ????????? ?????? ?????? 2??? ?????? ????????? ???????????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ?? ???????????? ????????? ?????? ??????????????? ????????? ???????????????.
                </Text>
              </View>
            )}
          </View>
          <View
            style={css`
              display: flex;
              flex-direction: column;
              margin: 25px 20px 50px 20px;
              border-bottom-width: 1px;
              border-bottom-color: rgb(112, 112, 112);
              border-style: solid;
            `}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('logi', !productDescOptions.logi);
              }}
              style={css`
                margin-bottom: 25px;
              `}>
              <DescTitleText isActive={productDescOptions.logi}>
                ???????????????
              </DescTitleText>
            </View>
            {productDescOptions.logi && (
              <View
                style={css`
                  padding-bottom: 25px;
                `}>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ??? ????????? ???????????? ???????????? ?????? ??? ???????????? ???11??? 2?????? ??????
                  ????????? ??????????????? ??????/????????? ???????????????. ???????????? ???
                  ?????????????????? ?????? ????????? ??????/????????? ???????????? ??????, ???????????????
                  10%??? ???????????? ???????????? ?????? ??? ??????/?????? ???????????? ????????????
                  10??? ?????? ???????????? ???????????? ?????????.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  ???????????? ??? ?????????????????? ?????? ??????/????????? ???????????? ??????, ??????
                  ??? ???????????? ??????/?????? ???????????? ???????????? 3??? ?????? ????????????
                  ???????????? ?????????.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Layout>
  );
};

const DescTitleText = styled.Text<{isActive: boolean}>`
  font-size: 14px;
  color: #939393;
  font-weight: bold;

  color: ${(props) => (props.isActive === true ? 'red' : 'black')};
`;

export default TestScreen;
