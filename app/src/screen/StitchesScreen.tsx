import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import Layout from '../components/Layout';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {FlexView, StyledText} from '../styles/stheme';

const StitchesScreen = () => {
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
    if (product) {
      return;
    }
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res: any = await axios.get(
        'https://dev.reddays.kr/products/show.json?product_id=2504357',
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
      {product && product !== undefined && (
        <ScrollView
          style={{
            backgroundColor: '$white',
          }}>
          {product.images && (
            <SwiperFlatList
              style={{
                width: width,
                height: 375,
              }}
              showPagination={false}
              data={product.images.d}
              renderItem={({item}) => (
                <View
                  style={{
                    width: width,
                    height: 375,
                  }}>
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

          <FlexView
            type="rowBetween"
            style={{
              alignItems: 'flex-start',
              marginTop: 35,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <FlexView type="col">
              <StyledText font="12" style={{fontWeight: 'bold'}}>
                {product.brand_name}
              </StyledText>
              <StyledText
                font="13"
                style={{
                  marginTop: 6,
                }}>
                {product.title}
              </StyledText>
              <StyledText
                font="10"
                color="gray217"
                style={{
                  fontWeight: 'bold',
                  marginTop: 6,
                }}>
                {product.apc_pcode}
              </StyledText>
            </FlexView>
            <FlexView
              type="rowEnd"
              style={{
                alignItems: 'flex-start',
              }}>
              <StyledText
                font="10"
                color="gray106"
                style={{
                  fontWeight: 'bold',
                }}>
                상품아이디: {product.id}
              </StyledText>
            </FlexView>
          </FlexView>

          <FlexView
            type="row"
            style={{
              marginTop: 25,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <StyledText
              font="18"
              style={{
                fontWeight: 'bold',
                marginRight: 5,
              }}>
              {Math.round((product.price / product.original_price) * 100)}%
            </StyledText>
            <StyledText
              font="18"
              color="isActiveRed"
              style={{
                fontWeight: 'bold',
                marginRight: 5,
              }}>
              {product.price}
            </StyledText>
            <StyledText
              font="11"
              color="gray182"
              style={{
                fontWeight: 'bold',
                marginTop: 6,
                textDecorationLine: 'line-through',
              }}>
              {product.original_price}
            </StyledText>
          </FlexView>

          <FlexView
            type="row"
            style={{
              marginTop: 9,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <StyledText font="10" color="gray106">
              *해외/국내 배송비 및 관부가세가 모두 포함된 금액입니다
            </StyledText>
          </FlexView>

          <FlexView
            type="row"
            style={{
              marginTop: 35,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <FlexView type="rowStart">
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'rgb(248, 184, 10)',
                  borderRadius: 4,
                  marginRight: 5,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'rgb(248, 184, 10)',
                  borderRadius: 4,
                  marginRight: 5,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'rgb(217, 217, 217)',
                  borderRadius: 4,
                  marginRight: 5,
                }}
              />
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'rgb(217, 217, 217)',
                  borderRadius: 4,
                  marginRight: 5,
                }}
              />
            </FlexView>
            <StyledText
              font="10"
              color="preorder"
              style={{
                fontWeight: 'bold',
                marginRight: 5,
              }}>
              입고확률 매우높음
            </StyledText>
            <StyledText
              font="10"
              color="gray182"
              style={{
                fontWeight: 'bold',
              }}>
              (마지막 입고일: 21년 10월)
            </StyledText>
          </FlexView>

          <FlexView
            type="row"
            style={{
              marginTop: 35,
            }}>
            <Image
              style={{
                width: width,
                height: 66,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/naverBanner.png')}
            />
          </FlexView>

          <FlexView
            type="col"
            style={{
              marginTop: 25,
              marginRight: 20,
              marginLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: '$gray112',
              borderStyle: 'solid',
            }}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('pick', !productDescOptions.pick);
              }}
              style={{
                marginBottom: 25,
              }}>
              <StyledText
                color={productDescOptions.pick ? 'isActiveRed' : 'gray93'}>
                예약구매 공통안내
              </StyledText>
            </View>
            {productDescOptions.pick && (
              <View
                style={{
                  paddingBottom: 25,
                }}>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 예약구매 상품은 구매가 불가능하며, 예약만 가능합니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 상품을 PICK! 해놓으면, 해당 상품이 입고됐을 때 알림메시지를
                  받을 수 있습니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 브랜드를 PICK! 해놓으면, 해당 브랜드 상품이 입고됐을 때
                  알림메시지를 받을 수 있습니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 특정 상품의 입고 예정일은 안내가 불가능합니다.
                </StyledText>
              </View>
            )}
          </FlexView>

          <FlexView
            type="col"
            style={{
              marginTop: 25,
              marginRight: 20,
              marginLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: '$gray112',
              borderStyle: 'solid',
            }}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('sale', !productDescOptions.sale);
              }}
              style={{
                marginBottom: 25,
              }}>
              <StyledText
                color={productDescOptions.sale ? 'isActiveRed' : 'gray93'}>
                빠른배송 공통안내
              </StyledText>
            </View>
            {productDescOptions.sale && (
              <View
                style={{
                  paddingBottom: 25,
                }}>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 빠른배송 상품은 영업일 기준 최대 7일 이내 배송이 완료됩니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 빠른배송 상품은 항공 물류창고 또는 국내 물류창고에 입고된
                  상품입니다.
                </StyledText>
              </View>
            )}
          </FlexView>

          <FlexView
            type="col"
            style={{
              marginTop: 25,
              marginRight: 20,
              marginLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: '$gray112',
              borderStyle: 'solid',
            }}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('quick', !productDescOptions.quick);
              }}
              style={{
                marginBottom: 25,
              }}>
              <StyledText
                color={productDescOptions.quick ? 'isActiveRed' : 'gray93'}>
                당일발송 공통안내
              </StyledText>
            </View>
            {productDescOptions.quick && (
              <View
                style={{
                  paddingBottom: 25,
                }}>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 당일발송 상품은 영업일 기준 최대 2일 이내 배송이 완료됩니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  · 당일발송 상품은 국내 물류창고에 입고된 상품입니다.
                </StyledText>
              </View>
            )}
          </FlexView>

          <FlexView
            type="col"
            style={{
              marginTop: 25,
              marginRight: 20,
              marginLeft: 20,
              borderBottomWidth: 1,
              borderBottomColor: '$gray112',
              borderStyle: 'solid',
            }}>
            <View
              onTouchEnd={() => {
                onChangeProductDescOptions('logi', !productDescOptions.logi);
              }}
              style={{
                marginBottom: 25,
              }}>
              <StyledText
                color={productDescOptions.logi ? 'isActiveRed' : 'gray93'}>
                배송가이드
              </StyledText>
            </View>
            {productDescOptions.logi && (
              <View
                style={{
                  paddingBottom: 25,
                }}>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  본 상품은 해외배송 상품으로 주문 후 이용약관 제11조 2항에 의거
                  교환이 불가능하며 취소/반품이 어렵습니다. 결제완료 후
                  단순변심으로 인해 반드시 취소/반품을 원하시는 경우, 상품가액의
                  10%에 해당하는 위약금과 관세 및 최초/반품 배송비에 해당하는
                  10만 원을 소비자가 부담해야 합니다.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  결제완료 후 단순변심으로 인한 취소/반품을 원하시는 경우, 검수
                  및 포장비와 최초/반품 배송비에 해당하는 3만 원을 소비자가
                  부담해야 합니다.
                </StyledText>
              </View>
            )}
          </FlexView>
        </ScrollView>
      )}
    </Layout>
  );
};

export default StitchesScreen;
