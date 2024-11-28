import type { Meta, StoryObj } from '@storybook/vue3';
import CardCustom from './CardCustom.vue';
const meta = {
    title: 'Card',
    component: CardCustom,
    tags: ['autodocs'],

    //props del pannello controllo storybook
    argTypes: {
        //Permette di controllare l'oggetto `card` dal pannello
        card: { 
            control: 'object', // selettore di oggetti nella colonna control
        },
    },
  // Valori predefiniti globali per tutte le storie
    args:{ 
        card: {
            title: 'Custom card',
            description: 'card di prova',
            image: '../assets/images/me.jpg',
            url: 'https://github.com/MattiaAngelini/front-end-practice-lab/commits/main/',
          },
    },
   
  } satisfies Meta<typeof CardCustom>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  /*
   *👇 Render functions are a framework specific feature to allow you control on how the component renders.
   * See https://storybook.js.org/docs/api/csf
   * to learn how to use render functions.
   */

 // Storia di default
    export const Default: Story = {
        args: {
        card: {
            title: 'Custom card',
            description: 'card di default',
            image: '../assets/images/me.jpg',
            url: 'https://github.com/MattiaAngelini/front-end-practice-lab/commits/main/',
        },
        },
  };
  
  // // Storia con colori personalizzati
  //   export const CustomColor: Story = {
  //       args: {
  //       card: {
  //           label: 'Custom card',
  //           url: '/custom/file.zip',
  //           bgColor: '#FF5733',
  //           color: '#000000',
  //       },
  //       },
  // };
  
  // // Storia secondaria
  //   export const Secondary: Story = {
  //       args: {
  //       card: {
  //           label: 'Secondary card',
  //           url: '/secondary/file.zip',
  //           bgColor: '#6C757D',
  //           color: '#FFFFFF',
  //       },
  //       },
  // };