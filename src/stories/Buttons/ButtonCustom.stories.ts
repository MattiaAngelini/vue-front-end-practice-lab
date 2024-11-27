import type { Meta, StoryObj } from '@storybook/vue3';
import ButtonCustom from './ButtonCustom.vue';
const meta = {
    title: 'ButtonCustom',
    component: ButtonCustom,
    tags: ['autodocs'],

    //props del pannello controllo storybook
    argTypes: {
        //Permette di controllare l'oggetto `button` dal pannello
        button: { 
            control: 'object', // selettore di oggetti nella colonna control
        },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
  // Valori predefiniti globali per tutte le storie
    args:{ 
        button: {
            label: 'Custom Button',
            url: '/custom/file.zip',
            bgColor: '#FF5733',
            color: '#000000',
          },
    },
   
  } satisfies Meta<typeof ButtonCustom>;
  
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
        button: {
            label: 'Default Button',
            url: '/default/file.zip',
            bgColor: '#007BFF',
            color: '#FFFFFF',
        },
        },
  };
  
  // // Storia con colori personalizzati
  //   export const CustomColor: Story = {
  //       args: {
  //       button: {
  //           label: 'Custom Button',
  //           url: '/custom/file.zip',
  //           bgColor: '#FF5733',
  //           color: '#000000',
  //       },
  //       },
  // };
  
  // // Storia secondaria
  //   export const Secondary: Story = {
  //       args: {
  //       button: {
  //           label: 'Secondary Button',
  //           url: '/secondary/file.zip',
  //           bgColor: '#6C757D',
  //           color: '#FFFFFF',
  //       },
  //       },
  // };