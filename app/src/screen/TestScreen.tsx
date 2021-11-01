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
                상품아이디: {product.id}
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
              *해외/국내 배송비 및 관부가세가 모두 포함된 금액입니다
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
              입고확률 매우높음
            </Text>
            <Text
              style={css`
                font-size: 10px;
                color: rgb(182, 182, 182);
                font-weight: bold;
              `}>
              (마지막 입고일: 21년 10월)
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
                예약구매 공통안내
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
                  · 예약구매 상품은 구매가 불가능하며, 예약만 가능합니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  · 상품을 PICK! 해놓으면, 해당 상품이 입고됐을 때 알림메시지를
                  받을 수 있습니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  · 브랜드를 PICK! 해놓으면, 해당 브랜드 상품이 입고됐을 때
                  알림메시지를 받을 수 있습니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  · 특정 상품의 입고 예정일은 안내가 불가능합니다.
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
                빠른배송 공통안내
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
                  · 빠른배송 상품은 영업일 기준 최대 7일 이내 배송이 완료됩니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  · 빠른배송 상품은 항공 물류창고 또는 국내 물류창고에 입고된
                  상품입니다.
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
                당일발송 공통안내
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
                  · 당일발송 상품은 영업일 기준 최대 2일 이내 배송이 완료됩니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  · 당일발송 상품은 국내 물류창고에 입고된 상품입니다.
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
                배송가이드
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
                  본 상품은 해외배송 상품으로 주문 후 이용약관 제11조 2항에 의거
                  교환이 불가능하며 취소/반품이 어렵습니다. 결제완료 후
                  단순변심으로 인해 반드시 취소/반품을 원하시는 경우, 상품가액의
                  10%에 해당하는 위약금과 관세 및 최초/반품 배송비에 해당하는
                  10만 원을 소비자가 부담해야 합니다.
                </Text>
                <Text
                  style={css`
                    color: black;
                    font-size: 11px;
                    margin-bottom: 5px;
                    line-height: 20px;
                  `}>
                  결제완료 후 단순변심으로 인한 취소/반품을 원하시는 경우, 검수
                  및 포장비와 최초/반품 배송비에 해당하는 3만 원을 소비자가
                  부담해야 합니다.
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
