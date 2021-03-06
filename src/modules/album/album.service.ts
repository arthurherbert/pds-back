import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './models/album.model';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async findById(id: string) {
    return await this.albumRepository.findOne({
      where: { id: id },
      relations: ['photos'],
    });
  }

  async findAll() {
    return await this.albumRepository.find({ relations: ['photos'] });
  }

  async create(album: CreateAlbumDto) {
    return await this.albumRepository.save(album);
  }

  async update(id: string, album: Partial<Album>) {
    return await this.albumRepository.update(id, album);
  }

  async delete(id: string) {
    return await this.albumRepository.softDelete(id);
  }
}
