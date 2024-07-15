export type QueueConfiguration = {
  type?: string,
  name: string,
}

function setType(value: string): string {
  switch(value) {
    case 'standard':
    case 'fifo':
      return value;
    default:
      throw new Error('Invalid Queue type');
  }
}

type QueueValue = {
  id: string,
  value: any,
}

export class MessageQueue {
  type: string;
  name: string;
  data: Map<string, any> | Array<QueueValue>;

  constructor(config: QueueConfiguration) {
    this.type = config.type ? setType(config.type) : 'standard';
    this.name = config.name;
    this.data = this.type === 'fifo' ? [] : new Map();
  }

  getLength(): number {
    switch(this.type) {
      case 'fifo':
        if (Array.isArray(this.data)) {
          return this.data.length;
        } else {
          return 0;
        }
      case 'standard':
        if (this.data instanceof Map) {
          return this.data.size;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  }
  add(id: string, value: any): void {
    if (this.type === 'fifo') {
      if (Array.isArray(this.data)) {
        this.data.push({ id, value });
      }
    } else {
      if (this.data instanceof Map) {
        this.data.set(id, value);
      }
    }
  }
  get(id: string | undefined): any  {
    if (id) {
      if (Array.isArray(this.data)) {
        let result = null;
        this.data.forEach(item => {
          if (item.id === id) {
            result = item.value;
          } 
        });
        return result;
      } else {
        return this.data.get(id);
      }
    } else {
      if (Array.isArray(this.data)) {
        return this.data[this.data.length - 1];
      }
    }
  }
  peek() {
    if (Array.isArray(this.data)) {
      return this.data[0]?.value;
    }
  }
  next() {

  }
  remove(id: string) {

  }
}