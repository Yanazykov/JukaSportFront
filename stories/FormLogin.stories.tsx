import type { Meta, StoryObj } from '@storybook/react';
import { FormLogin } from '../src/pages/LoginPage/components/FormLogin';
import '../src/index.css';
const meta: Meta<typeof FormLogin> = {
    component: FormLogin,
    tags: ['autodocs'],
    title: 'Components/FormLogin',
};

export default meta;
type Story = StoryObj<typeof FormLogin>;
/**
 * Formulario de inicio de sesión
 */
export const Form: Story = {};
