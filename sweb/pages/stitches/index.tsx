import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../../components/Layout";
import { theme } from "../../styles/stitches.config";
import { FlexView, StyledText } from "../../styles/styles";

const StitchesIndex = () => {
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
        "https://dev.reddays.kr/products/show.json?product_id=2504357"
      );
      setProduct(res.data.product);
    } catch (e: any) {
      console.log("error!!");
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
        <FlexView
          type="rowBetween"
          style={{
            alignItems: "flex-start",
            marginTop: 120,
            marginBottom: 200,
          }}
        >
          {product.images && (
            <div
              style={{
                width: 580,
                height: 580,
              }}
            >
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={false}
                loop={false}
              >
                {product.images.d.map((img: any) => (
                  <SwiperSlide key={img}>
                    <img
                      style={{
                        width: 580,
                        height: 580,
                        backgroundSize: "contain",
                      }}
                      src={img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <FlexView
            type="col"
            style={{
              alignItems: "flex-start",
              width: 520,
              flex: "1 0 auto",
              marginRight: 40,
              marginLeft: 40,
            }}
          >
            <FlexView
              type="rowBetween"
              style={{
                alignItems: "flex-start",
              }}
            >
              <FlexView type="col">
                <StyledText font="sm" style={{ fontWeight: "bold" }}>
                  {product.brand_name}
                </StyledText>
                <StyledText
                  font="md"
                  style={{
                    marginTop: 6,
                  }}
                >
                  {product.title}
                </StyledText>
                <StyledText
                  font="xxs"
                  color="gray217"
                  style={{
                    fontWeight: "bold",
                    marginTop: 6,
                  }}
                >
                  {product.apc_pcode}
                </StyledText>
              </FlexView>
              <FlexView
                type="rowEnd"
                style={{
                  alignItems: "flex-start",
                }}
              >
                <StyledText
                  font="xxs"
                  color="gray106"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ???????????????: {product.id}
                </StyledText>
              </FlexView>
            </FlexView>

            <FlexView
              type="row"
              style={{
                marginTop: 25,
              }}
            >
              <StyledText
                font="xxl"
                style={{
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                {Math.round((product.price / product.original_price) * 100)}%
              </StyledText>
              <StyledText
                font="xxl"
                color="isActiveRed"
                style={{
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                {product.price}
              </StyledText>
              <StyledText
                font="xs"
                color="gray182"
                style={{
                  fontWeight: "bold",
                  marginTop: 6,
                  textDecorationLine: "line-through",
                }}
              >
                {product.original_price}
              </StyledText>
            </FlexView>

            <FlexView
              type="row"
              style={{
                marginTop: 9,
              }}
            >
              <StyledText font="xxs" color="gray106">
                *??????/?????? ????????? ??? ??????????????? ?????? ????????? ???????????????
              </StyledText>
            </FlexView>

            <FlexView
              type="row"
              style={{
                marginTop: 35,
              }}
            >
              <FlexView type="rowStart">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "rgb(248, 184, 10)",
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "rgb(248, 184, 10)",
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                />
                <div
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderRadius: 4,
                    marginRight: 5,
                  }}
                />
              </FlexView>
              <StyledText
                font="xxs"
                color="preorder"
                style={{
                  fontWeight: "bold",
                  marginRight: 5,
                }}
              >
                ???????????? ????????????
              </StyledText>
              <StyledText
                font="xxs"
                color="gray182"
                style={{
                  fontWeight: "bold",
                }}
              >
                (????????? ?????????: 21??? 10???)
              </StyledText>
            </FlexView>

            <FlexView
              type="row"
              style={{
                width: "100%",
                marginTop: 35,
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: 66,
                }}
                src="../assets/images/naverBanner.png"
              />
            </FlexView>

            <FlexView
              type="col"
              style={{
                width: "100%",
                flex: "1 0 auto",
                marginTop: 25,
                borderBottom: `1px solid ${theme.colors.gray112}`,
              }}
            >
              <div
                onClick={() => {
                  onChangeProductDescOptions("pick", !productDescOptions.pick);
                }}
                style={{
                  cursor: "pointer",
                  marginBottom: 5,
                }}
              >
                <StyledText
                  color={productDescOptions.pick ? "isActiveRed" : "gray93"}
                >
                  ???????????? ????????????
                </StyledText>
              </div>
              {productDescOptions.pick && (
                <FlexView
                  type="col"
                  style={{
                    paddingBottom: 5,
                  }}
                >
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? ????????? ????????? ???????????????, ????????? ???????????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ????????? PICK! ????????????, ?????? ????????? ???????????? ???
                    ?????????????????? ?????? ??? ????????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? PICK! ????????????, ?????? ????????? ????????? ???????????? ???
                    ?????????????????? ?????? ??? ????????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ?????? ????????? ?????? ???????????? ????????? ??????????????????.
                  </StyledText>
                </FlexView>
              )}
            </FlexView>

            <FlexView
              type="col"
              style={{
                width: "100%",
                flex: "1 0 auto",
                marginTop: 25,
                borderBottom: `1px solid ${theme.colors.gray112}`,
              }}
            >
              <div
                onClick={() => {
                  onChangeProductDescOptions("sale", !productDescOptions.sale);
                }}
                style={{
                  cursor: "pointer",
                  marginBottom: 25,
                }}
              >
                <StyledText
                  color={productDescOptions.sale ? "isActiveRed" : "gray93"}
                >
                  ???????????? ????????????
                </StyledText>
              </div>
              {productDescOptions.sale && (
                <FlexView
                  type="col"
                  style={{
                    paddingBottom: 5,
                  }}
                >
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? ????????? ????????? ?????? ?????? 7??? ?????? ?????????
                    ???????????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? ????????? ?????? ???????????? ?????? ?????? ??????????????? ?????????
                    ???????????????.
                  </StyledText>
                </FlexView>
              )}
            </FlexView>

            <FlexView
              type="col"
              style={{
                width: "100%",
                flex: "1 0 auto",
                marginTop: 25,
                borderBottom: `1px solid ${theme.colors.gray112}`,
              }}
            >
              <div
                onClick={() => {
                  onChangeProductDescOptions(
                    "quick",
                    !productDescOptions.quick
                  );
                }}
                style={{
                  cursor: "pointer",
                  marginBottom: 25,
                }}
              >
                <StyledText
                  color={productDescOptions.quick ? "isActiveRed" : "gray93"}
                >
                  ???????????? ????????????
                </StyledText>
              </div>
              {productDescOptions.quick && (
                <FlexView
                  type="col"
                  style={{
                    paddingBottom: 5,
                  }}
                >
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? ????????? ????????? ?????? ?????? 2??? ?????? ?????????
                    ???????????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ?? ???????????? ????????? ?????? ??????????????? ????????? ???????????????.
                  </StyledText>
                </FlexView>
              )}
            </FlexView>

            <FlexView
              type="col"
              style={{
                width: "100%",
                flex: "1 0 auto",
                marginTop: 25,
                borderBottom: `1px solid ${theme.colors.gray112}`,
              }}
            >
              <div
                onClick={() => {
                  onChangeProductDescOptions("logi", !productDescOptions.logi);
                }}
                style={{
                  cursor: "pointer",
                  marginBottom: 25,
                }}
              >
                <StyledText
                  color={productDescOptions.logi ? "isActiveRed" : "gray93"}
                >
                  ???????????????
                </StyledText>
              </div>
              {productDescOptions.logi && (
                <FlexView
                  type="col"
                  style={{
                    paddingBottom: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ??? ????????? ???????????? ???????????? ?????? ??? ???????????? ???11??? 2??????
                    ?????? ????????? ??????????????? ??????/????????? ???????????????. ???????????? ???
                    ?????????????????? ?????? ????????? ??????/????????? ???????????? ??????,
                    ??????????????? 10%??? ???????????? ???????????? ?????? ??? ??????/??????
                    ???????????? ???????????? 10??? ?????? ???????????? ???????????? ?????????.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    ???????????? ??? ?????????????????? ?????? ??????/????????? ???????????? ??????,
                    ?????? ??? ???????????? ??????/?????? ???????????? ???????????? 3??? ??????
                    ???????????? ???????????? ?????????.
                  </StyledText>
                </FlexView>
              )}
            </FlexView>
          </FlexView>
        </FlexView>
      )}
    </Layout>
  );
};

export default StitchesIndex;
