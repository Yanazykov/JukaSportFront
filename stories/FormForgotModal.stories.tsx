import type { Meta, StoryObj } from '@storybook/react';
import '../src/index.css';
import { FormForgotModal } from '../src/pages/LoginPage/components/FormForgotModal';
const meta: Meta<typeof FormForgotModal> = {
    component: FormForgotModal,
    title: 'Components/ModalForgotPassword',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormForgotModal>;
/**
 * Formulario de inicio de sesión
 */
export const Form: Story = {};
