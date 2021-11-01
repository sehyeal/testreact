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
                  상품아이디: {product.id}
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
                *해외/국내 배송비 및 관부가세가 모두 포함된 금액입니다
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
                입고확률 매우높음
              </StyledText>
              <StyledText
                font="xxs"
                color="gray182"
                style={{
                  fontWeight: "bold",
                }}
              >
                (마지막 입고일: 21년 10월)
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
                  예약구매 공통안내
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
                    · 예약구매 상품은 구매가 불가능하며, 예약만 가능합니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    · 상품을 PICK! 해놓으면, 해당 상품이 입고됐을 때
                    알림메시지를 받을 수 있습니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    · 브랜드를 PICK! 해놓으면, 해당 브랜드 상품이 입고됐을 때
                    알림메시지를 받을 수 있습니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    · 특정 상품의 입고 예정일은 안내가 불가능합니다.
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
                  빠른배송 공통안내
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
                    · 빠른배송 상품은 영업일 기준 최대 7일 이내 배송이
                    완료됩니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    · 빠른배송 상품은 항공 물류창고 또는 국내 물류창고에 입고된
                    상품입니다.
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
                  당일발송 공통안내
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
                    · 당일발송 상품은 영업일 기준 최대 2일 이내 배송이
                    완료됩니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    · 당일발송 상품은 국내 물류창고에 입고된 상품입니다.
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
                  배송가이드
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
                    본 상품은 해외배송 상품으로 주문 후 이용약관 제11조 2항에
                    의거 교환이 불가능하며 취소/반품이 어렵습니다. 결제완료 후
                    단순변심으로 인해 반드시 취소/반품을 원하시는 경우,
                    상품가액의 10%에 해당하는 위약금과 관세 및 최초/반품
                    배송비에 해당하는 10만 원을 소비자가 부담해야 합니다.
                  </StyledText>
                  <StyledText
                    font="xs"
                    lh="lh20"
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    결제완료 후 단순변심으로 인한 취소/반품을 원하시는 경우,
                    검수 및 포장비와 최초/반품 배송비에 해당하는 3만 원을
                    소비자가 부담해야 합니다.
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
