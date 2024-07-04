import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, Animated, PanResponder, ImageBackground, Image } from 'react-native';




const CardScreen = () => {



    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


    const imageData = [
        {
            imageUrl: require('../assets/images/cards/CardBG1.png'),
            bankName: "SBI Bank",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG2.png'),
            bankName: "BOB Bank",
            cardNumber: '5533 1234 4342 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "Master Card"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG3.png'),
            bankName: "Kotak Mahindra Bank",
            cardNumber: '1234 1234 1234 1234',
            userName: "Maya Singh",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG4.png'),
            bankName: "HDFC Bank",
            cardNumber: '1234 7777 1234 1234',
            userName: "Anil Rajput",
            expireDate: "08/254",
            cardType: "RuPay Card"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG.png'),
            bankName: "IDFC Bank",
            cardNumber: '1234 1234 1234 2342',
            userName: "Deepesh",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG5.png'),
            bankName: "SBI ",
            cardNumber: '8866 1234 1234 1234',
            userName: "Krishna Gupta",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG6.png'),
            bankName: "SBI",
            cardNumber: '1234 3333 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG7.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG8.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG9.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG10.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG11.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG12.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        },
        {
            imageUrl: require('../assets/images/cards/CardBG13.png'),
            bankName: "SBI",
            cardNumber: '1234 1234 1234 1234',
            userName: "Yogesh Nirmal",
            expireDate: "08/254",
            cardType: "VISA"
        }
    ]

    let cardsPan = new Animated.ValueXY()
    let cardsStackedAnim = new Animated.Value(0) // add this statement


    const [currentIndex, setcurrentIndex] = useState(0) //and this to track card positions

    const cardsPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (event, gestureState) => {
            cardsPan
                .setValue(
                    { x: gestureState.dx, y: cardsPan.y }
                );
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderRelease: (event, gestureState) => {
            // bring the translationX back to 0
            Animated.timing(cardsPan, {
                toValue: 0,
                duration: 300,
            }).start();
            // will be used to interpolate values in each view
            Animated.timing(cardsStackedAnim, {
                toValue: 1,
                duration: 300,
            }).start(() => {
                // reset cardsStackedAnim's value to 0 when animation ends
                cardsStackedAnim.setValue(0);
                // increment card position when animation ends

                setcurrentIndex(currentIndex + 1)

            });
        },
    })


    console.log(imageData[(currentIndex + 2) % imageData.length], imageData[(currentIndex + 1) % imageData.length], imageData[(currentIndex) % imageData.length])
    console.log((currentIndex + 2) % imageData.length, (currentIndex + 1) % imageData.length, (currentIndex) % imageData.length)


    return (
        <View style={{
            backgroundColor: 'yellow',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={{
                    width: '95%',
                    height: 350,
                    position: 'absolute',
                    zIndex: 1,
                    bottom: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [40, 20]
                    }),
                    transform: [{
                        scale: cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [1, 0.80]
                        })
                    }],
                    opacity: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [0.3, 0.6]
                    }),
                }}
            >
                <ImageBackground
                    source={imageData[(currentIndex + 2) % imageData.length]?.imageUrl}
                    resizeMode="cover"
                    style={{
                        padding: 10,
                        height: 300,
                        borderRadius: 10

                    }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Space Grotesk',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        {imageData[(currentIndex + 2) % imageData.length]?.bankName}
                    </Text>
                </ImageBackground>

            </Animated.View>
            <Animated.View
                style={{
                    width: '95%',
                    height: 300,
                    position: 'absolute',
                    zIndex: 2,
                    bottom: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [20, 0]
                    }),
                    transform: [{
                        scale: cardsStackedAnim.interpolate({
                            inputRange: [0, 1], outputRange: [1, 0.80]
                        })
                    }],
                    opacity: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [0.6, 1]
                    }),
                }}
            >
                <ImageBackground
                    source={imageData[(currentIndex + 1) % imageData.length]?.imageUrl}
                    resizeMode="cover"
                    style={{
                        padding: 10,
                        height: 300,
                    }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Space Grotesk',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        {imageData[(currentIndex + 1) % imageData.length]?.bankName}
                    </Text>
                </ImageBackground>

            </Animated.View>
            <Animated.View
                {...cardsPanResponder.panHandlers}
                style={{
                    width: '95%',
                    height: 250,
                    position: 'absolute',
                    zIndex: cardsStackedAnim.interpolate({
                        inputRange: [0, 0.5, 1], outputRange: [3, 2, 0]
                    }),
                    bottom: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [0, 40]
                    }),
                    opacity: cardsStackedAnim.interpolate({
                        inputRange: [0, 1], outputRange: [1, 0.3]
                    }),
                    transform: [
                        { translateX: cardsPan.x },
                        {
                            scale: cardsStackedAnim.interpolate({
                                inputRange: [0, 1], outputRange: [1, 0.80]
                            })
                        },
                    ],
                }}
            >
                <ImageBackground
                    source={imageData[(currentIndex) % imageData.length]?.imageUrl}
                    style={{
                        padding: 10,
                        height: 250,
                        padding: 10

                    }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Space Grotesk',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        {imageData[(currentIndex) % imageData.length]?.bankName}
                    </Text>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingVertical: 10
                    }}>
                        <Image
                            source={require('../assets/images/icon/chip.png')}
                            style={{
                                height: 50,
                                width: 50,

                            }}
                            resizeMode='contain'
                        /><Image
                            source={require('../assets/images/icon/contactless.png')}
                            style={{
                                height: 50,
                                width: 50,

                            }}
                            resizeMode='contain'
                        />
                    </View>

                    <Text style={{
                        color: '#fff',
                        fontFamily: 'Space Grotesk',
                        fontSize: 32,
                        fontWeight: 'bold'
                    }}>
                        {imageData[(currentIndex) % imageData.length]?.cardNumber}
                    </Text>

                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingTop: 20
                    }}>
                        <View style={{
                            width: '50%',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Space Grotesk',
                                fontSize: 12,
                                fontWeight: '600',
                                lineHeight: 30
                            }}>Card Holder name</Text>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Space Grotesk',
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}
                                numberOfLines={1}
                            >{imageData[(currentIndex) % imageData.length]?.userName}</Text>
                        </View>

                        <View style={{
                            width: '25%',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Space Grotesk',
                                fontSize: 12,
                                fontWeight: '600',
                                lineHeight: 30
                            }}>Expiry date</Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Space Grotesk',
                                    fontSize: 22,
                                    fontWeight: 'bold'
                                }}


                            >{imageData[(currentIndex) % imageData.length]?.expireDate}</Text>
                        </View>

                        <View style={{
                            width: '25%',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>

                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Space Grotesk',
                                fontSize: 22,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                                numberOfLines={1}>{imageData[(currentIndex) % imageData.length !== 0]?.cardType}</Text>
                        </View>

                    </View>
                </ImageBackground>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CardScreen;
