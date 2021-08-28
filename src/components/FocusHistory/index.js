import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import { colors } from '../../utils/colors';
import { fontSizes, spacingSizes } from '../../utils/sizes';
import { RoundedButton } from '../RoundedButton';

const HistoryItem = ({ item }) => {
    return (
        <View style={ styles.itemView }>
            <Text style={ styles.historyItem(item.status) }>
                • { item.subject.length > 30 ?
                    item.subject.substring(0, 30) + '...'
                :
                    item.subject
                } 
            </Text>

            <>
                { item.status === 1 ?
                    <Text style={ styles.textConcluded }>
                        CONCLUÍDO
                    </Text>
                    :
                    <Text style={ styles.textCancelled }>
                        CANCELADO
                    </Text>
                } 
            </>
        </View>
        
    )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
    return (
        <>
            <SafeAreaView style={ styles.container }>
                {!!focusHistory.length && (
                    <>
                        <Text style={ styles.title }>Focos recentes</Text>
                        <FlatList
                            style={ styles.list }
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                        <RoundedButton  
                            title={"Limpar"} 
                            size={50} 
                            type="rectangle"
                            onPress={() => onClear() }
                            style={ styles.clearButton }
                        />
                    </>
                )}
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    historyItem: (status) => ({
        color: status === 1 ? colors.mainGreen : colors.mainRed,
        fontSize: fontSizes.medium,
        fontWeight: 'bold',
        marginBottom: spacingSizes.extraSmall,
    }),

    title: {
        color: 'white',
        fontSize: fontSizes.large,
        fontWeight: 'bold',
        marginBottom: spacingSizes.small,
    },

    list: {
        width: '90%',
        borderWidth: 2,
        borderRadius: 4,
        borderColor: colors.mainWhite,
        marginBottom: spacingSizes.medium,
    },

    itemView: {
        marginTop: spacingSizes.extraSmall,
        paddingLeft: spacingSizes.medium,
        paddingRight: spacingSizes.medium,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'scroll',
    },

    textConcluded: {
        color: colors.mainGreen,
        fontSize: fontSizes.small,
        fontWeight: 'bold',
        marginBottom: spacingSizes.extraSmall,
    },

    textCancelled: {
        color: colors.mainRed,
        fontSize: fontSizes.small,
        fontWeight: 'bold',
        marginBottom: spacingSizes.extraSmall,
    },

    clearButton: {
        backgroundColor: colors.lightRed,
        borderColor: colors.mainRed,
        marginBottom: spacingSizes.medium,
    },
})