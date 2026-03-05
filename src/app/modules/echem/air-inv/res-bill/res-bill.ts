import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-res-bill',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './res-bill.html',
  styleUrl: './res-bill.css',
})
export class ResBill {

  orderForm: FormGroup;
  previewData: any = {};
  totalAmount = 0

  menuItems = [
    { name: "pizza", price: 250 },
    { name: "burger", price: 150 },
    { name: "fries", price: 100 },
    { name: "coke", price: 50 }
  ];
  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        name: ['', Validators.required, Validators.minLength(3)],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      orderType: ['DINE_IN', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      }),
      items: this.fb.array([]),
      paymentMethod: ['CASH', Validators.required],
      tip: [0],
      agree: [false, Validators.requiredTrue]

    });
    this.addItem(); 

    this.setupDynamicLogic();

    this.orderForm.valueChanges.subscribe(value => {
      this.previewData = value;
      this.calculateTotal();
    });
  }
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(
      this.fb.group({
        itemName: ['', Validators.required],
        price: [0],
        quantity: [1, [Validators.required, Validators.min(1)]]
      })
    );
  }
   removeItem(index: number) {
    this.items.removeAt(index);
    this.calculateTotal();
  }
  setupDynamicLogic() {

    this.orderForm.get('orderType')?.valueChanges.subscribe(value => {

      const addressGroup = this.orderForm.get('address');

      if (value === 'DELIVERY') {
        addressGroup?.get('street')?.setValidators(Validators.required);
        addressGroup?.get('city')?.setValidators(Validators.required);
        addressGroup?.get('zip')?.setValidators(Validators.required);
      } else {
        addressGroup?.get('street')?.clearValidators();
        addressGroup?.get('city')?.clearValidators();
        addressGroup?.get('zip')?.clearValidators();
      }

      addressGroup?.updateValueAndValidity();
    });
  }
   calculateTotal() {

    let total = 0;

    this.items.controls.forEach((item: any) => {
      total += item.get('price').value * item.get('quantity').value;
    });

    total += this.orderForm.get('tip')?.value || 0;

    this.totalAmount = total;
  }

  
  submit() {

    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const finalPayload = {
      ...this.orderForm.getRawValue(),
      totalAmount: this.totalAmount
    };

    console.log('FINAL ORDER:', finalPayload);
  }
   loadDemo() {

    this.orderForm.patchValue({
      customer: {
        name: 'Jaydeep',
        phone: '9876543210',
        email: 'jaydip@gmail.com'
      },
      orderType: 'DELIVERY',
      paymentMethod: 'CARD',
      tip: 50
    });

  }
  onItemChange(index: number, event: Event) {

  const selectElement = event.target as HTMLSelectElement;
  const selectedIndex = selectElement.selectedIndex;

  const selectedPrice = this.menuItems[selectedIndex].price;

  const itemGroup = this.items.at(index);

  itemGroup.get('price')?.setValue(selectedPrice);
}
}
