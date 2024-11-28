import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/Owner.model';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.fetchOwners();
  }

  fetchOwners(): void {
    this.ownerService.getAllOwners().subscribe((data) => {
      this.owners = data;
    });
  }

  editOwner(id: string): void {
    console.log(`Edit owner with ID: ${id}`);
    // Implement navigation or functionality for editing
  }

  deleteOwner(id: string): void {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.ownerService.deleteOwner(id).subscribe(() => {
        this.owners = this.owners.filter((owner) => owner.id !== id);
      });
    }
  }
}