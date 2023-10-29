import { StyleSheet, Dimensions } from 'react-native';

const defaultWidth = Dimensions.get('window').width - 40;

{/* Export Styles: Use for Global */}
export const styles = StyleSheet.create({

  /* Define: Containers and Flex Styles*/
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
  },

  bodyContent: {
    flex: 1,
    justifyContent: 'center',
    width: defaultWidth,
  },

  endContent: {
    flex: 0,
    margin: 20,
    gap: 10,
    width: defaultWidth,
    justifyContent: 'center', 
  },

  contentRow: {
    flexDirection: 'row',
  },

  flexItem: {
    flex: 1,
  },

  noFlexContainer: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 20,
  },

  oneFlexContainer: {
    flex: 1,
  },

  /* Define: Text Styles */
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subheader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  pagesSubheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },

  description: {
    fontSize: 12,
    color: '#FFFFFF',
  },

  whiteText: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'white',
  },

  bodyText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
  },

  /* Define: Global Components */
  rightText: {
    color: '#FF65C3',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

textStyle: {
    fontWeight: 'bold',
    color: 'white',
},
inputStyle: {
    padding: 10,
    borderColor: 'white',
    borderRadius: 5, 
    borderWidth: 1,
    color: 'white', // Add color property for text color
},
});