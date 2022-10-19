import { View, Text, Linking, StyleSheet } from 'react-native';
import React from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { RNHoleView } from 'react-native-hole-view';
import styles from '../../styles'
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

const QRReader = () => {

    // Using Camere
    const devices = useCameraDevices();
    const device = devices.back; // Choose back camera

    // // State
    // const [data, setData] = React.useState(null)
    // const [barcode, setBarcode] = React.useState('')
    // const [isScanned, setIsScanned] = React.useState(false)

    // const [frameProcessor, barcodes] = useScanBarcodes([
    //     BarcodeFormat.QR_CODE
    // ])

    // React.useEffect(() => {
    //     toggleActiveState()
    // },[barcodes])

    React.useEffect(() => {
        requestCameraPermission()
    },[])

    // Function
    const requestCameraPermission = React.useCallback( async () => {

        const permission = await Camera.requestCameraPermission();

        if (permission === 'denied') await Linking.openSettings();

    }, []);

    // const toggleActiveState = async () => {
    //     if (barcodes && barcodes.length >0 && isScanned === false){
    //         setIsScanned(true)

    //         barcodes.forEach( async (scannedBarcode) => {
    //                 if(scannedBarcode.rawValue !== "") {
    //                     setBarcode(scannedBarcode.rawValue)
    //                 }
    //         })
    //     }
    // }

    // Main function
    function renderQRCode() {
        if (device == null ) {
            return (
                <View> 
                    <Text>No Camera</Text>
                </View>
            )
        } else {
            return (
                <>
                    <Camera
                        device={device}
                        isActive={true}
                        enableZoomGesture
                        // frameProcessor={frameProcessor}
                        // frameProcessorFps={5}
                        audio={false}
                        style={StyleSheet.absoluteFill}
                    />
                    <RNHoleView
                        holes={[
                        {
                            x: "50%",
                            y: "150%",
                            width: 320,
                            height: 320,
                            borderRadius: 10,
                        },
                        ]}
                        style={styles.rnholeView}
                    />
                </>
            )
        }
    }

  return (
    <>
        {/* Render Camera */}
        {renderQRCode()}
    </>
    

  )
}
export default QRReader