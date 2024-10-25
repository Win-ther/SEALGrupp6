import {mount} from "@vue/test-utils";
import {describe, it, expect, vi, beforeEach} from "vitest";
import CaretaView from "@/views/CaretaView.vue";

let wrapper;

vi.mock('vue-router', () => {
    const actualRouter = vi.importActual('vue-router');
    return {
        ...actualRouter,
        useRoute: () => ({
            params: {
                id: '1'
            },
            query: {}
        })
    }
});

beforeEach(() => {
    wrapper = mount(CaretaView);
});

describe('ValidateForm', () => {
    it('renders correctly', async () => {
        expect(wrapper.text()).toContain('/day      Enter your full name:Enter your phone number:Enter your email:Date From:Date To: Reserve Careta');
    });

    it("validates that name cannot be empty", async () => {
        wrapper.vm.state.reservation.customerName = '';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false);
        expect(alertMock).toHaveBeenCalledWith('Name can not be empty.');
    });

    it('validates form correctly, name needs to match these characters(a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.\'-)', async () => {
        wrapper.vm.state.reservation.customerName = '<div class="bg-amber-600">Jeff Bezos: Union Hunter</div>';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false);
        expect(alertMock).toHaveBeenCalledWith('Please enter a valid name.');

    });

    it('validates form correctly, phone number cannot be empty', async () => {
        wrapper.vm.state.reservation.customerName = 'TestPerson';
        wrapper.vm.state.reservation.customerPhone = '';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false);
        expect(alertMock).toHaveBeenCalledWith('Phone number can not be empty.');

    });

    it('validates form correctly, phone number can only use numbers', async () => {
        wrapper.vm.state.reservation.customerName = 'TestPerson';
        wrapper.vm.state.reservation.customerPhone = '12345TEST67890';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false);
        expect(alertMock).toHaveBeenCalledWith('Please enter a valid phone number. Only numbers are allowed.');

    });

    it('validates form correctly, email cannot be empty', async () => {
        wrapper.vm.state.reservation.customerName = 'TestName';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = '';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false)
        expect(alertMock).toHaveBeenCalledWith('Email address can not be empty.');
    });

    it('validates form correctly, email needs to follow format test@test.test', async () => {
        wrapper.vm.state.reservation.customerName = 'TestName';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'testEmail';

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        })
        expect(wrapper.vm.validateForm()).toBe(false);
        expect(alertMock).toHaveBeenCalledWith('Please enter a valid email address.');
    });

    it('validates form correctly, prevents setting date from before today\'s date', async () => {
        wrapper.vm.state.reservation.customerName = 'TestName';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'test@example.com';
        const today = new Date();
        wrapper.vm.state.reservation.dateFrom = new Date(today.getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false)
        expect(alertMock).toHaveBeenCalledWith('Date From cannot be set before todays date.');
    });

    it('validates form correctly, prevents date range not exceeding 14 days', async () => {
        wrapper.vm.state.reservation.customerName = 'TestName';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'test@example.com';
        const today = new Date();
        wrapper.vm.state.reservation.dateFrom = today.toISOString().split('T')[0];
        wrapper.vm.state.reservation.dateTo = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {
        });
        expect(wrapper.vm.validateForm()).toBe(false)
        expect(alertMock).toHaveBeenCalledWith('You can only reserve a car for 14 days straight.');
    });

    it('validates form correctly, all fields are valid should return true', async () => {
        wrapper.vm.state.reservation.customerName = 'Jeff Testblum';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'test@example.com';
        const today = new Date();
        wrapper.vm.state.reservation.dateFrom = today.toISOString().split('T')[0];
        wrapper.vm.state.reservation.dateTo = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        expect(wrapper.vm.validateForm()).toBe(true)
    });
});

describe('ReserveCar', () => {
    it('it should submit the reservation', async () => {
        wrapper.vm.state.reservation.customerName = 'Jeff Testblum';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'test@example.com';
        const today = new Date();
        wrapper.vm.state.reservation.dateFrom = today.toISOString().split('T')[0];
        wrapper.vm.state.reservation.dateTo = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const reserveCar = wrapper.vm.reserveCar;
        global.fetch = vi.fn(() =>
            Promise.resolve({
                text: () => Promise.resolve('J1015922005'),
            })
        );

        await reserveCar();

        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/api/reservations', expect.any(Object));
        expect(wrapper.vm.state.reservationNumber).toBe('J1015922005');
    });

    it('reject should return errors', async () => {
        wrapper.vm.state.reservation.customerName = 'Jeff Testblum';
        wrapper.vm.state.reservation.customerPhone = '1234567890';
        wrapper.vm.state.reservation.customerEmail = 'test@example.com';
        const today = new Date();
        wrapper.vm.state.reservation.dateFrom = today.toISOString().split('T')[0];
        wrapper.vm.state.reservation.dateTo = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const reserveCar = wrapper.vm.reserveCar;
        global.fetch = vi.fn(() =>
            Promise.reject(new Error('Fetch error')));
        const consoleSpy = vi.spyOn(console, 'log');

        await reserveCar();

        expect(wrapper.vm.state.reservationNumber).toBe('');
        expect(consoleSpy).toHaveBeenCalledWith('Error adding reservation', expect.any(Error));
    });

});
