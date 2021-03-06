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
                ???????????????: {product.id}
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
              *??????/?????? ????????? ??? ??????????????? ?????? ????????? ???????????????
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
              ???????????? ????????????
            </StyledText>
            <StyledText
              font="10"
              color="gray182"
              style={{
                fontWeight: 'bold',
              }}>
              (????????? ?????????: 21??? 10???)
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
                ???????????? ????????????
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
                  ?? ???????????? ????????? ????????? ???????????????, ????????? ???????????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ?? ????????? PICK! ????????????, ?????? ????????? ???????????? ??? ??????????????????
                  ?????? ??? ????????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ?? ???????????? PICK! ????????????, ?????? ????????? ????????? ???????????? ???
                  ?????????????????? ?????? ??? ????????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ?? ?????? ????????? ?????? ???????????? ????????? ??????????????????.
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
                ???????????? ????????????
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
                  ?? ???????????? ????????? ????????? ?????? ?????? 7??? ?????? ????????? ???????????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ?? ???????????? ????????? ?????? ???????????? ?????? ?????? ??????????????? ?????????
                  ???????????????.
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
                ???????????? ????????????
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
                  ?? ???????????? ????????? ????????? ?????? ?????? 2??? ?????? ????????? ???????????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ?? ???????????? ????????? ?????? ??????????????? ????????? ???????????????.
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
                ???????????????
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
                  ??? ????????? ???????????? ???????????? ?????? ??? ???????????? ???11??? 2?????? ??????
                  ????????? ??????????????? ??????/????????? ???????????????. ???????????? ???
                  ?????????????????? ?????? ????????? ??????/????????? ???????????? ??????, ???????????????
                  10%??? ???????????? ???????????? ?????? ??? ??????/?????? ???????????? ????????????
                  10??? ?????? ???????????? ???????????? ?????????.
                </StyledText>
                <StyledText
                  font="11"
                  lh="lh20"
                  style={{
                    marginBottom: 5,
                  }}>
                  ???????????? ??? ?????????????????? ?????? ??????/????????? ???????????? ??????, ??????
                  ??? ???????????? ??????/?????? ???????????? ???????????? 3??? ?????? ????????????
                  ???????????? ?????????.
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
