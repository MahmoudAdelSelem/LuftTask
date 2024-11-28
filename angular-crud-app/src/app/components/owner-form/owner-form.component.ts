import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/models/Owner.model';
import { OwnerForCreation } from 'src/app/models/OwnerForCreation.model';
import { OwnerService } from 'src/app/services/owner.service';


@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {
  ownerForm!: FormGroup;
  isEditMode = false;
  ownerId!: string;

  constructor(
    private fb: FormBuilder,
    private ownersService: OwnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    // Check if we are in edit mode
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.ownerId = id;
        this.loadOwner(id);
      }
    });
  }

  initializeForm() {
    this.ownerForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      dateOfBirth: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  loadOwner(id: string) {
    this.ownersService.getOwnerById(id).subscribe((owner: Owner) => {
      this.ownerForm.patchValue({
        name: owner.name,
        dateOfBirth: owner.dateOfBirth,
        address: owner.address,
      });
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      const updatedOwner: OwnerForCreation = this.ownerForm.value;
      this.ownersService.updateOwner(this.ownerId, updatedOwner).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      const newOwner: OwnerForCreation = this.ownerForm.value;
      this.ownersService.createOwner(newOwner).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}