import { StyleSheet, Dimensions } from 'react-native';

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
    width: Dimensions.get('window').width - 40,
  },

  endContent: {
    flex: 0,
    margin: 20,
    gap: 10,
    width: Dimensions.get('window').width - 40,
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

  /* Define: Global Components */
  pinkButton: {
    borderRadius: 5,
    paddingHorizontal: 100,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: "#FF65C3",
    borderWidth: 1,
    borderColor: "#FF65C3",
    height: 40,
    width: Dimensions.get('window').width - 40,
  },
});